from main import *
from functools import wraps


@app.route('/')
def main_screen():
    page = request.args.get("page", 1, type=int)

    board = mongo.db.board
    datas = board.find({}).limit(5).sort("pubdate", -1)

    image = mongo.db.image
    slide = image.find({})

    return render_template("index.html", datas=datas, page=page, slide=slide)


def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get("id") is None or session.get("id") == "":
            return redirect(url_for("member.member_login", next_url=request.url))
        return f(*args, **kwargs)

    return decorated_function
