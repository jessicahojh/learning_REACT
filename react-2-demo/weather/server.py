"""Demonstration backend for AJAX."""

import random
from flask import Flask, request, render_template
from flask import jsonify

app = Flask(__name__)

WEATHER = {
    "94110": {"forecast": "Rainy, damp, and rich with hipsters.", "temp": "60F"},
    "99507": {"forecast": "Warm, balmy, and good for sunbathing.", "temp": "100F"},
    "94102": {"forecast": "Delightful, clever, and full of Python.", "temp": "55F"},
}

DEFAULT_WEATHER = {"forecast": "Kind of boring.", "temp": "68F"}


@app.route("/")
def index():
    """Homepage."""

    return render_template("index.html")


@app.route("/weather.json")
def weather():
    """Return a weather-info dictionary for this zipcode."""

    zipcode = request.args.get("zipcode")
    weather_info = WEATHER.get(zipcode, DEFAULT_WEATHER)
    return jsonify(weather_info)

@app.route("/random/weather.json")
def random_weather():

    zipcode = random.choice(list(WEATHER.keys()))
    return jsonify(WEATHER[zipcode])

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
