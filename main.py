from app import create_app, register_blueprints


def main():
    app = create_app()
    app.run(host='0.0.0.0', port=9000, debug=True)


if __name__ == "__main__":
    main()
