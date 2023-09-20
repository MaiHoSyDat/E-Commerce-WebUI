import * as XLSX from 'xlsx/xlsx.mjs'

class CommonUtils {
    static getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error)
        })
    }

    static exportExcel(data, nameSheet, nameFile) {
        return new Promise((resolve, reject) => {
            let wb = XLSX.utils.book_new();
            let ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, nameSheet);
            const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            const blob = new Blob([wbout], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${nameFile}.xlsx`;
            link.click();
            URL.revokeObjectURL(url);
            resolve('ok');
        });
    }
}

export default CommonUtils;