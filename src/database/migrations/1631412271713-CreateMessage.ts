import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessage1631412271713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'messages',
            columns: [
                {
                    name: 'msg_id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'msg_chat_id',
                    type: 'uuid',
                },
                {
                    name: 'msg_text',
                    type: 'varchar(500)',
                },
                {
                    name: 'msg_created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
            ],
            foreignKeys: [{
                name: 'FKChat',
                referencedTableName: 'chats',
                referencedColumnNames: ['chat_id'],
                columnNames: ['msg_chat_id'],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
