import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1603068296418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id', //nome da coluna
                    type: 'integer', // tipo da coluna
                    unsigned: true, // não pode conter valor negativo ( -1)
                    isPrimary: true, // chave primaria da tabela
                    isGenerated: true, // vai ser gerada automaticamente 
                    generationStrategy: 'increment', // auto incremente ++
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'interge',
                }
            ],
            foreignKeys: [ // criando a referencia n:1
                {
                    name: 'ImageOrphanage', // name da chave
                    columnNames: ['orphanage_id'], //nome da coluna q tera o relacionamento 
                    referencedTableName: 'orphanages', // qual tabela de referencia 
                    referencedColumnNames: ['id'], // qual coluna de referencia
                    onUpdate: 'CASCADE', // condições quando a tabela for deletada
                    onDelete: 'CASCADE', // condições quando a tabela for deletada
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
