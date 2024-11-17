# Use an Nginx base image
FROM nginx:latest

# Copy website files to the Nginx directory
COPY ./my-webs /usr/share/nginx/html

# Expose port 80
EXPOSE 80
