FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/rightflow-web

# Copy dependencies files and install
COPY package.json yarn.lock ./
RUN yarn install

# Copy sources files
COPY . .

# Build app
RUN yarn build

# Remove unusual files for running
RUN rm -rf ./src ./public

# Expose app port
EXPOSE 9004

CMD ["node", "index.js"]
