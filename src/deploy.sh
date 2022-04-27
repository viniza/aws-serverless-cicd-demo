#! /bin/bash

npm install -g serverless@3.15.0
serverless deploy --stage $env --package $CODEBUILD_SRC_DIR/target/$env --verbose --region us-east-1
