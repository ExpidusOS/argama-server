import { Entity, Property, Unique, PrimaryKey, SerializedPrimaryKey } from '@mikro-orm/core'

@Entity()
export default class Organization {
	@PrimaryKey()
	_uid!: number

	@SerializedPrimaryKey()
	uid!: number

	@Property()
	@Unique()
	id: string

	@Property()
	name: string

	constructor(id: string, name: string) {
		this.id = id
		this.name = name
	}
}
