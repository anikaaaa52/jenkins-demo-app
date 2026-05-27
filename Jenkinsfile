pipeline {
 agent any
 stages {
  stage('Build Docker Image') {
   steps {
    sh 'docker build -t nodejs-app .'
   }
}
 stage('Test App') {
steps {
sh 'docker run -d -p 3000;3000 --name test-app nodejs-app'
sh 'sleep 5'
sh 'curl localhost:3000'
sh 'docker stop test-app && docker rm test-app'
}
}
}
}

    





