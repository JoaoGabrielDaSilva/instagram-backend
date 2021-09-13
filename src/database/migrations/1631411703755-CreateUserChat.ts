import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserChat1631411703755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users_chats',
            columns: [
                {
                    name: 'usrc_id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'usrc_user_id',
                    type: 'uuid'
                },
                {
                    name: 'usrc_chat_id',
                    type: 'uuid'
                },
            ],
            foreignKeys: [
            {
                name: 'FKUser',
                referencedTableName: 'users',
                referencedColumnNames: ['usr_id'],
                columnNames: ['usrc_user_id'],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            },
            {
                name: 'FKChat',
                referencedTableName: 'chats',
                referencedColumnNames: ['chat_id'],
                columnNames: ['usrc_chat_id'],
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
