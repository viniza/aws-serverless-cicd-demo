## About The Sample

This is a sample demo application using AWS DevOps services and Serverless framework (https://www.serverless.com/)

### Built With

* [AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)
* [AWS CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)
* [AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html)
* [AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)
* [Serverless Framework](https://www.serverless.com/)

### Installation

1. Download the source code to your local machine.
2. Sign in to your AWS account with Administrative privileges. Go to the AWS CloudFormation console and create a stack using template cloudformation/templates/lambdacicd-pipeline.yaml. Use default parameters, enter a valid email address to get notified of changes in the pipeline. Follow on screen instructions to deploy and create the stack.
3. Go to the CodeCommit Console, and locate the newly created repository. Follow this documentation to setup CodeCommit and clone the repository locally (it should be an empty repository): https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html
4. Copy the downloaded source code in your cloned repository. Create a new commit and push to 'main' branch.
5. Go to the AWS CodePipeline console and you will see the pipeline execution.
6. Go to the AWS CloudFormation console and you will see new stacks for each of the environments (dev, stg and prod). Inspect the "Outputs" tab, you will see the endpoint of the sample application, copy the URL and paste it in a new browser and add /random?size=100 to the end of the URL to see the response of the function.

## Usage

The sample can be extended to use other AWS services and technologies, for example, you can add more CodePipeline stages or new environments. The serverless.yml file can be extended to create a full microservice. For more information how to use Serverless framework see: https://www.serverless.com/

## License

Distributed under the Apache License. See `LICENSE` for more information.

## Contact

Isidro Hernandez - https://www.viniza.mx - contacto@viniza.tech

## Acknowledgments

* [Author](Isidro Hernandez)
