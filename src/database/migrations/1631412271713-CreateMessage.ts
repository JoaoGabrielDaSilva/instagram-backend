import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessage1631412271713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'messages',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'chat_id',
                    type: 'uuid',
                },
                {
                    name: 'text',
                    type: 'varchar(500)',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'user_id',
                    type: 'varchar',
                    isNullable: true
                }
            ],
            foreignKeys: [{
                name: 'FKMessageChat',
                referencedTableName: 'chats',
                referencedColumnNames: ['id'],
                columnNames: ['chat_id'],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            },
            {
                name: 'FKMessageUser',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('messages')
    }

}
