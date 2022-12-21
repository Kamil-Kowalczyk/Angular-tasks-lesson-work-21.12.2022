export class Task {
    taskName!: string;
    taskDate!: string;
    isFinished!: boolean;

    constructor(taskName: string, taskDate: string){
        this.taskName = taskName;
        this.taskDate = taskDate;
        this.isFinished = false;
    }

    checkIfIsExpired(): boolean {
        if (new Date() >= new Date(this.taskDate))
            return true;
        return false;
    }
}