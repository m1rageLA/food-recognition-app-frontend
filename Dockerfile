FROM node:20-bullseye

# Установите необходимые пакеты для Android SDK
RUN apt-get update && apt-get install -y \
  wget \
  unzip \
  openjdk-11-jdk \
  && rm -rf /var/lib/apt/lists/*

# Установите Android SDK
RUN mkdir -p /opt/android-sdk && cd /opt/android-sdk && \
  wget https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip && \
  unzip commandlinetools-linux-8512546_latest.zip && rm commandlinetools-linux-8512546_latest.zip

# Установите переменную окружения ANDROID_HOME
ENV ANDROID_HOME=/opt/android-sdk
ENV PATH=$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH

# Установите необходимые компоненты SDK
RUN yes | sdkmanager --licenses && \
    sdkmanager "platform-tools" "build-tools;30.0.3" "platforms;android-30"

# Настройка рабочего каталога
WORKDIR /app

COPY package*.json ./

RUN npm install -g expo-cli
RUN npm install

COPY . .

EXPOSE 19000 19001 19002

CMD ["npx", "expo", "start", "--android"]
