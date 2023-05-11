//LWC Component
import { LightningElement, track } from 'lwc';

export default class LambdaFunctionality extends LightningElement {

    @track response;

    handleSubmit(event) {
        event.preventDefault();
        const fields = event.detail.fields;

        // call AWS Lambda function
        const lambdaFunction = async () => {
            const response = await fetch('https://myAWSLambdaEndpoint.com', {
                method: 'POST',
                body: JSON.stringify(fields)
            });
            return response.json();
        }
        lambdaFunction()
            .then(data => {
                this.response = data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

}