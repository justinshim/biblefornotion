import os
import json

def create_directories_and_files(main_folder, data):
    os.makedirs(main_folder, exist_ok=True)
    for item in data:
        id = item['id'].replace(" ", "")
        folder_name = main_folder + "/" + id
        os.makedirs(folder_name, exist_ok=True)
        
        for i, chapter in enumerate(item['chapters']):
            chapter_folder = os.path.join(folder_name, str(i + 1))
            os.makedirs(chapter_folder, exist_ok=True)
            
            for i, k in enumerate(chapter):
                chapter_file = os.path.join(chapter_folder, f'{i + 1}.json')
                decoded_string = k.encode('utf-8').decode('utf-8')
                with open(chapter_file, 'w') as f:
                    json.dump(decoded_string, f, ensure_ascii=False)

# Read the JSON file
json_files = os.listdir('versao-completa')

for json_file in json_files:
    json_file = f'versao-completa/{json_file}'

    with open(json_file, encoding='utf-8-sig') as f:
        data = json.load(f)

    version = json_file.replace('.json', '')

    create_directories_and_files(version, data)
