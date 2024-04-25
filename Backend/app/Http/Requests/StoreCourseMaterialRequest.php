<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCourseMaterialRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'course_id' => 'required|exists:courses,id',
            'type' => 'required|string',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'content' => 'nullable|string',
            'file_path' => 'nullable|string',
            'duration' => 'nullable|integer',
            'order' => 'nullable|integer',
            'is_published' => 'nullable|boolean',
        ];
    }
}
