/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8sgjor9lrvdr8s3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9wfovb1i",
    "name": "admin_logistics",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4opjmacw",
    "name": "Logistics123",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 6,
      "max": 12,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8sgjor9lrvdr8s3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9wfovb1i",
    "name": "nickname",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4opjmacw",
    "name": "Password",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 6,
      "max": 12,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
