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
                script {
                    // Build the Docker image
                    def dockerImage = docker.build('your-image-name:tag', '.')
                    
                    // Authenticate with the Docker registry
                    withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                        // Push the Docker image to the registry
                        dockerImage.push()
                    }
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
