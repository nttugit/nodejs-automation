pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Use the Docker tool you configured
                tool name: 'jenkins-docker', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
                script {
                    // Run a Docker command
                    sh 'docker --version'
                }
            }
        }
    }
}