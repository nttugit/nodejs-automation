pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
               git 'https://github.com/nttugit/nodejs-automation'
            }
        }
        
        stage('Build and Push Docker Image') {
            steps {
                    // Authenticate with the Docker registry
                    withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                      bat 'docker build -t nicenguyen/nodejs-automation:v2 .'
                      bat 'docker push nicenguyen/nodejs-automation:v2'

                    }
            }
        }
    }
    
    post {
        always {
            // Clean up Docker images and containers
            cleanWs()
            sh 'docker system prune -af'
        }
    }
}
