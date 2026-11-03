# Venture 3D Studio — Fresh Check

A browser-based, geometry-driven product studio for Mission 2. Built with TypeScript, Vite, Three.js and JSZip. No account or paid API is required to edit and export.

## Student guide

1. Drag to orbit, scroll to zoom, right-drag to pan; use the camera buttons for front/side/top or orthographic views.
2. Select a component in Scene. Enter dimensions in centimeters, then click **Apply dimensions & position**. Move/Rotate/Resize enable visual handles.
3. Change color or material. Image & branding lets you upload an embedded texture. Concept stores reference images and view labels.
4. **Save project** stores an editable version in IndexedDB on this browser. **Editable project** downloads a portable JSON backup; **Open project** restores it. Browser data may be cleared, so keep backups.
5. **Confirm Model** exports actual geometry, reimports it for validation, hashes the GLB, saves a confirmed snapshot, and creates the five-file ZIP. Click **Download confirmed handoff**. Bring the entire ZIP to Mission 3.

The studio opens with six editable Fresh Check components. Eight editable templates are included. Undo/redo covers scene and material edits. Imported GLBs are editable groups; they retain embedded materials until you apply an override.

## Development

Requires Node 22 and pnpm 11.25.0:

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Production base is `/Venture-3D-Studio/`. `.github/workflows/pages.yml` builds and deploys `dist` on pushes to main. Repository Settings → Pages → Source must be **GitHub Actions**. Only this Mission 2 repository is affected.

## Handoff schema 1.0.0

`model-manifest.json` contains schemaVersion, handoffVersion (browser-local sequence), projectName, modelName, modelType, confirmedAt (ISO 8601), dimensions, coordinateSystem, camera, background, lighting, description, featureHotspots, files, integrity, and meshCount. GLB bounds and camera/hotspot positions are in meters; editor positions/dimensions are centimeters. Y is up and coordinates are right-handed. `integrity.checksum` is lowercase SHA-256 of the exact GLB bytes. `files` names refer to files at the ZIP root.

- model.glb: binary glTF with embedded textures
- project.json: schemaVersion 1, editable parts and embedded image/model assets
- preview.png: current camera preview
- README.txt: Mission 3 instructions
- model-manifest.json: metadata and checksum

`viewer.html` is a separate GLB viewer that imports the exported model independently of the editor.

## Limits

This is a stylized interpretation of two reference images, not an accurate image-to-3D reconstruction, engineering CAD, or a food-safety sensing system. Approximate default dimensions are 24.7 × 11.02 × 16.7 cm. Pasta uses repeated stylized geometry. Transparent surfaces use alpha blending, so visual overlap can vary by viewer. UV textures wrap according to each part's geometry; the screen is the simplest flat branding surface. Templates are starting points, not manufacturing-ready designs. Imported GLBs retain their structure as one selectable group. Core geometry and editing run locally after the site loads; Google Fonts is an optional cosmetic network request. Uploads remain in browser memory/storage and in downloaded project files.
