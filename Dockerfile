# Use an official NGINX image
FROM nginx:latest

# Copy website files to the NGINX default directory
COPY my-web /usr/share/nginx/html


# Expose port 80
EXPOSE 80