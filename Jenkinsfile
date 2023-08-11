pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('jenkins-docker')
	}

	stages {

		stage('Build') {

			steps {
				sh 'docker build -t nodejs-automation:latest .'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
		
		
		stage('View Images') {

			steps {
				sh 'docker images'
			}
		}
		
		stage('Docker Tag') {

			steps {
				sh 'docker tag nodejs-automation nicenguyen/nodejs-automation'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push nicenguyen/nodejs-automation'
			}
		}
		
		stage('Remove current container if it exists') {

			steps {
				sh 'docker rm -f nodejs-automation || true'
			}
		}
		
		stage('Run in Container') {

			steps {
				sh 'docker run --publish 3000:3000 --name nodejs-automation -d --rm nicenguyen/nodejs-automation:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}