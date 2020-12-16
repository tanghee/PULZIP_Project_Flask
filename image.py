from pymongo import MongoClient

client = MongoClient(host="localhost", port=27017)
db = client.PULZIP
col = db.image

col.insert_one({"url": "/static/img/slide/01.png"})
col.insert_one({"url": "/static/img/slide/02.png"})
col.insert_one({"url": "/static/img/slide/03.png"})
col.insert_one({"url": "/static/img/slide/04.png"})
col.insert_one({"url": "/static/img/slide/05.png"})
col.insert_one({"url": "/static/img/slide/06.png"})
col.insert_one({"url": "/static/img/slide/07.png"})
col.insert_one({"url": "/static/img/slide/08.png"})
col.insert_one({"url": "/static/img/slide/09.png"})
col.insert_one({"url": "/static/img/slide/10.png"})
col.insert_one({"url": "/static/img/slide/11.png"})
col.insert_one({"url": "/static/img/slide/12.png"})
col.insert_one({"url": "/static/img/slide/13.png"})
col.insert_one({"url": "/static/img/slide/14.png"})
col.insert_one({"url": "/static/img/slide/15.png"})