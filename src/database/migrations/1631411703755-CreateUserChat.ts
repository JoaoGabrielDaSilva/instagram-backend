import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserChat1631411703755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users_chats',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'user_id',
                    type: 'uuid'
                },
                {
                    name: 'chat_id',
                    type: 'uuid'
                },
            ],
            foreignKeys: [
            {
                name: 'FKUserChatsUser',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            },
            {
                name: 'FKUserChatsChat',
                referencedTableName: 'chats',
                referencedColumnNames: ['id'],
                columnNames: ['chat_id'],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            },
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users_chats')
    }

}
