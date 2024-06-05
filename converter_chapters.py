import os
import json

def create_directories_and_files(main_folder, data):
    os.makedirs(main_folder, exist_ok=True)
    for item in data:
        id = item['id'].replace(" ", "")
        folder_name = main_folder + "/" + id

        os.makedirs(folder_name, exist_ok=True)
        book_file = os.path.join(folder_name, f'{id}.json')
        with open(book_file, 'w') as f:
            json.dump(item, f, ensure_ascii=False)
                

# Read the JSON file
json_files = os.listdir('versoes-completas')

for json_file in json_files:
    json_file = f'versoes-completas/{json_file}'

    with open(json_file, encoding='utf-8-sig') as f:
        data = json.load(f)

    version = json_file.replace('.json', '')

    create_directories_and_files(version, data)