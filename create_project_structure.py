import os

# Define the project structure
project_structure = {
    "CyberGuardAI": {
        "README.md": "",
        "docs": {
            "api.md": "",
            "user_guide.md": "",
            "architecture_diagram.md": ""
        },
        "frontend": {
            "public": {
                "index.html": ""
            },
            "src": {
                "components": {},
                "pages": {},
                "hooks": {},
                "services": {},
                "styles": {},
                "utils": {},
                "App.js": ""
            },
            "package.json": ""
        },
        "backend": {
            "app.py": "",
            "config.py": "",
            "models": {
                "__init__.py": "",
                "user_model.py": ""
            },
            "routes": {
                "__init__.py": "",
                "scanner_routes.py": "",
                "malware_routes.py": "",
                "breach_routes.py": ""
            },
            "services": {
                "__init__.py": "",
                "scanner_service.py": "",
                "malware_service.py": "",
                "breach_service.py": ""
            },
            "ml_models": {
                "__init__.py": "",
                "model_training.py": "",
                "model_prediction.py": "",
                "utils.py": ""
            },
            "database": {
                "db_setup.py": "",
                "db_operations.py": ""
            },
            "tests": {
                "__init__.py": "",
                "test_scanner.py": "",
                "test_malware.py": "",
                "test_breach.py": ""
            },
            "Dockerfile": "",
            "requirements.txt": ""
        },
        "data": {
            "raw": {},
            "processed": {},
            "breach_data": {},
            "ml_data": {}
        },
        "scripts": {
            "run_ml_models.py": "",
            "data_collection.py": ""
        },
        ".gitignore": "",
        "docker-compose.yml": ""
    }
}

def create_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        else:
            with open(path, 'w') as f:
                f.write(content)

# Create the project structure
create_structure(os.getcwd(), project_structure)
print("Project structure created successfully!")
