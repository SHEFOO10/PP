<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCourseMaterialRequest extends FormRequest
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
            'title' => 'sometimes|string',
            'description' => 'sometimes|string',
            'content' => 'sometimes|string',
            'file_path' => 'sometimes|string',
            'duration' => 'sometimes|integer',
            'order' => 'sometimes|integer',
            'is_published' => 'sometimes|boolean',
        ];

        // return [
        //     'type' => 'sometimes|string',
        //     'title' => 'sometimes|string',
        //     'description' => 'sometimes|string',
        //     'content' => 'sometimes|string',
        //     'file_path' => 'sometimes|string',
        //     'duration' => 'sometimes|integer',
        //     'order' => 'sometimes|integer',
        //     'is_published' => 'sometimes|boolean',
        // ];
    }
}
