from app import app, register_blueprints, init_data


register_blueprints(app)
init_data()


def main():
    app.run(host='0.0.0.0', port=8000, debug=True)


if __name__ == "__main__":
    main()
