FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY AKarateFelgueiras.csproj .
RUN dotnet restore AKarateFelgueiras.csproj
COPY . .
RUN dotnet build AKarateFelgueiras.csproj -c Release -o /app/build

FROM build AS publish
RUN dotnet publish AKarateFelgueiras.csproj -c Release -o /app/publish

FROM docker.io/library/nginx:alpine AS final
WORKDIR /usr/share/nginx/html
COPY --from=publish /app/publish/wwwroot .
COPY nginx.conf /etc/nginx/nginx.conf