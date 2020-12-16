import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
from datetime import datetime


client = MongoClient(host="localhost", port=27017)
db = client.PULZIP
col = db.board

header = {"user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36"}

for i in range(6):
    url = "https://www.google.com/search?q={}&start={}".format("짚신공예", i * 10)
    r = requests.get(url, headers=header)
    bs = BeautifulSoup(r.text, "lxml")
    lists = bs.select("div.g")

    for l in lists:
        current_utc_time = round(datetime.utcnow().timestamp() * 1000)

        try:
            title = l.select_one("h3.LC20lb span").text
            contents = l.select_one("span.aCOpRe span").text

            col.insert_one({
                "name": "테스트",
                "title": title,
                "contents": contents,
                "view": 0,
                "pubdate": current_utc_time,
            })

        except:
            pass