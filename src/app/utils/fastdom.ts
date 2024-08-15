type Task = () => void;

class FastDom {
    private reads: Task[] = [];
    private writes: Task[] = [];
    private scheduled: boolean = false;

    // Schedule a new read task
    measure(task: Task): void {
        this.reads.push(task);
        this.scheduleFlush();
    }

    // Schedule a new write task
    mutate(task: Task): void {
        this.writes.push(task);
        this.scheduleFlush();
    }

    // Schedule the flush of tasks
    private scheduleFlush(): void {
        if (!this.scheduled) {
            this.scheduled = true;
            requestAnimationFrame(this.flush.bind(this));
        }
    }

    // Flush reads and writes
    private flush(): void {
        let task: Task | undefined;

        // Execute all measure (read) tasks
        while (task = this.reads.shift()) {
            task();
        }

        // Execute all mutate (write) tasks
        while (task = this.writes.shift()) {
            task();
        }

        this.scheduled = false;
    }
}

export default new FastDom();
