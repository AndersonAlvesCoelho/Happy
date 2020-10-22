import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603060762304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orphanages',
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
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10, // numeros depois da virgula
                    precision: 2 // numeros antes da virgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10, // numeros depois da virgula
                    precision: 2 // numeros antes da virgula
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'bollean',
                    default: false, // valor padrão
                },
            ]
        }))
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
