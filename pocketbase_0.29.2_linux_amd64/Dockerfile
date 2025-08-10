FROM alpine:latest

# Set working directory
WORKDIR /app

# Copy the PocketBase binary into the container
COPY pocketbase /app/pocketbase

# Make sure the binary is executable
RUN chmod +x /app/pocketbase

# Expose the port PocketBase will use
EXPOSE 10000

# Start PocketBase
CMD ["./pocketbase", "serve", "--http", "0.0.0.0:10000"]
