
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { PassengerData } from '.';

@Entity({ name: 'passengers' })
export class Passenger {

    public static readonly NAME_LENGTH = 50;

    @ObjectIdColumn()
    public id: number;

    @Column({ name: 'firstName', length: Passenger.NAME_LENGTH })
    public firstName: string;

    @Column({ name: 'lastName', length: Passenger.NAME_LENGTH })
    public lastName: string;

    public buildData(): PassengerData {

        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName
        };
    }

}
