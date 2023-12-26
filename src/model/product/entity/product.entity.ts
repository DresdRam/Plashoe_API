import { ProductInventory } from "src/model/product_inventory/entity/product_category.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: false
    })
    description: string;

    @Column({
        nullable: false
    })
    main_image: string;

    @Column({
        nullable: false
    })
    secondary_images: string;

    @OneToOne(() => ProductInventory, inventory => inventory.product)
    @JoinColumn({ name: 'inventory_id' })
    inventory: ProductInventory;

}