import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateChat1631412154332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'chats',
            columns: [
                {
                    name: 'chat_id',
                    type: 'uuid',
                    isPrimary: true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('chats')
    }

}
