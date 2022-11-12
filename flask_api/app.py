from flask import Flask, request, jsonify
from flask_cors import CORS

from transformers import (
    TokenClassificationPipeline,
    AutoModelForTokenClassification,
    AutoTokenizer,
)
from transformers.pipelines import AggregationStrategy
import numpy as np

# Define keyphrase extraction pipeline
class KeyphraseExtractionPipeline(TokenClassificationPipeline):
    def __init__(self, model, *args, **kwargs):
        super().__init__(
            model=AutoModelForTokenClassification.from_pretrained(model),
            tokenizer=AutoTokenizer.from_pretrained(model),
            *args,
            **kwargs
        )

    def postprocess(self, model_outputs):
        results = super().postprocess(
            model_outputs=model_outputs,
            aggregation_strategy=AggregationStrategy.SIMPLE,
        )
        return np.unique([result.get("word").strip() for result in results])

app = Flask(__name__)
CORS(app)


@app.route('/getServerResponse', methods=['POST'])
def serverResponse():
    data = request.get_json().get('queryuser')
    print(type(data))

    model_name = "ml6team/keyphrase-extraction-kbir-inspec"

    extractor = KeyphraseExtractionPipeline(model=model_name)

    keyphrases = extractor(data)

    print(keyphrases)

    responseData = {'keywords': list(keyphrases)}

    return jsonify(responseData)

if __name__ == '__main__':
    app.run(debug=True)