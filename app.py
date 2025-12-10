import pandas as pd

proveedores = []

print("=== Registro de Proveedores y Marcas ===")

while True:
    proveedor = input("Nombre del proveedor: ")
    marca = input("Marca asociada: ")

    proveedores.append({
        "Proveedor": proveedor,
        "Marca": marca
    })

    continuar = input("¿Deseas agregar otro? (s/n): ").lower()
    if continuar != "s":
        break

# Convertir la lista a DataFrame
df = pd.DataFrame(proveedores)

# Exportar a Excel
archivo_salida = "proveedores_marcas.xlsx"
df.to_excel(archivo_salida, index=False)

print("\nDatos guardados exitosamente en:", archivo_salida)
