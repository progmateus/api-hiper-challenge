interface IUpdateWorkdaysDTO {
    id?: string;
    worker_id: string;
    day: string;
    entry_time: string;
    departure_time: string;
    created_at: Date
    updated_at: Date
}
export { IUpdateWorkdaysDTO };