import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1631321413534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'usr_id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'usr_name',
                    type: 'varchar',
                },
                {
                    name: 'usr_email',
                    type: 'varchar',
                },
                {
                    name: 'usr_password',
                    type: 'varchar',
                },
                {
                    name: 'usr_profile_picture',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'usr_socket_id',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'usr_created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'usr_updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
