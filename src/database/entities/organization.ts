import { ObjectId } from '@mikro-orm/mariadb'
import { Collection, Entity, ManyToMany, PrimaryKey, Property, SerializedPrimaryKey } from '@mikro-orm/core'

@Entity()
export default class Organization {
	@PrimaryKey()
	public id: ObjectId
}
