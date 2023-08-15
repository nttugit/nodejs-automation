pipeline {
    agent any

    stages {
        stage('Checkout git'){
            steps {
                git 'https://github.com/nttugit/nodejs-automation'
                bat 'npm install'
            }
        }
        stage('Build docker image') {
            steps {
                script {
                    bat 'docker build -t nicenguyen/nodejs-automation .'
                }
            }
        }
        stage ('Push image to Hub') {
            steps {
                script {
                    bat 'docker push nicenguyen/nodejs-automation'
                }
            }
        }
    }

}