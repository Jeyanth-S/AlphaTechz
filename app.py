# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# app = Flask(__name__)
# CORS(app)
# combined_model = joblib.load("final_model.pkl")
# print(type(combined_model))
# @app.route("/predict", methods=["POST"])
# def predict():
#     data = request.json
#     message = data["message"]
#     prediction = combined_model.predict([message])[0]
#     return jsonify({"response": prediction})
# if __name__ == "__main__":
#     app.run(debug=True, host="0.0.0.0")


from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load your model (update the path to your model file)
model = joblib.load("chat_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")  # Make sure you load the vectorizer as well


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    message = data["message"]
    # Vectorize the input message
    message_vectorized = vectorizer.transform([message])
    # Make a prediction
    prediction = model.predict(message_vectorized)[0]

    return jsonify({"response": prediction})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
