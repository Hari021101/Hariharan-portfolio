$word = New-Object -ComObject Word.Application
$word.Visible = $false
try {
    Write-Host "Opening DOCX file..."
    $docPath = 'C:\Users\Mhari\Documents\Hari Personal\Hariharan_M_.NET_Full Stack_Dev_Resume.docx'
    $doc = $word.Documents.Open($docPath)
    
    $pdfPath = Join-Path $PSScriptRoot "public\Hariharan_M_Resume.pdf"
    Write-Host "Saving to PDF at $pdfPath..."
    
    # 17 is the enum value for PDF format (wdFormatPDF)
    $doc.SaveAs([ref]$pdfPath, [ref]17)
    $doc.Close()
    Write-Host "Resume updated successfully in public folder!"
} catch {
    Write-Error "Failed to update resume: $_"
} finally {
    $word.Quit()
}
