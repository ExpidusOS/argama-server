import { Collection, Entity, ManyToMany, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core'

@Entity()
export default class Organization {
	@PrimaryKey()
	_id!: number

	@SerializedPrimaryKey()
	id!: number
}
