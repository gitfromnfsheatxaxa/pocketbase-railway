/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nort9hydwinxvja")

  // remove
  collection.schema.removeField("y3h7osx8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxb9an1l",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nort9hydwinxvja")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3h7osx8",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("yxb9an1l")

  return dao.saveCollection(collection)
})
