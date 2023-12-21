import os

def replace_header_with_structure(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace content within <header> and replace with specified HTML structure
    start_tag = '<header>'
    end_tag = '</header>'
    start_index = content.find(start_tag)
    end_index = content.find(end_tag) + len(end_tag)

    if start_index != -1 and end_index != -1:
        content = content[:start_index] + '''
<!-- Include an empty div for the header -->
<div id="header-container"></div>

<!-- The rest of your content goes here -->

<!-- Include the JavaScript file for the header -->
<script src="header.js"></script>
''' + content[end_index:]

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def process_html_files(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.html'):
            file_path = os.path.join(directory, filename)
            replace_header_with_structure(file_path)
            print(f"Processed: {file_path}")


if __name__ == "__main__":
    # Replace 'your_directory' with the path to the directory containing your HTML files
    target_directory = 'C:/Users/alyth/Documents/GitHub/SimplyCooked'

    process_html_files(target_directory)
