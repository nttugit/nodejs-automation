pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('jenkins-docker')
    }
    stages {
      stage('Clone stage') {
            steps {
                git 'https://github.com/nttugit/nodejs-automation.git' 
            }
        }
        stage ('Build stage') {
            steps {
                withDockerRegistry(credentialsId: 'docker-hub-nicenguyen', url: 'https://index.docker.io/v1/') {
                    sh 'docker build -t nicenguyen/nodejs-automation:v2 .'
                    sh 'docker push nicenguyen/nodejs-automation:v2'
                }
            }
        }
    }
}