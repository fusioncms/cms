<?php

namespace Fusion\Tests\Feature;

use ZipArchive;
use Fusion\Facades\Theme;
use Fusion\Tests\TestCase;
use Illuminate\Support\Str;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ThemeTest extends TestCase
{
	use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();

        Storage::fake('themes');
    }

    /**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function a_user_with_permission_can_upload_a_theme()
	{
		$this->actingAs($this->owner, 'api');

		list($themePath, $themeName) = $this->generateTheme();

		$response = $this->json(
		    'POST',
		    '/api/themes',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, true, true)
		    ]
		)->assertStatus(201);
	}

	/**
	 * @test
	 * @group fusioncms
	 * @group themes
	 */
	public function a_user_with_permission_can_set_currently_active_theme()
	{
		$this->actingAs($this->owner, 'api');

		$this
			->json('PATCH', '/api/theme/Test')
			->assertStatus(200);

		$this->assertEquals(setting('system.theme'), 'Test');
	}

	/**
     * @test
     * @group fusioncms
     * @group feature
     * @group themes
     * @group auth
     */
	public function a_guest_cannot_not_upload_a_theme()
	{
		$this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/themes');
	}

	/**
     * @test
     * @group fusioncms
     * @group feature
     * @group themes
     * @group permission
     */
	public function a_user_without_permissions_cannot_not_view_any_themes()
	{
		$this->expectException(AuthorizationException::class);

        $this
        	->be($this->user, 'api')
        	->json('GET', '/api/themes');
	}

	/**
     * @test
     * @group fusioncms
     * @group feature
     * @group themes
     * @group permission
     */
	public function a_user_without_permissions_cannot_not_upload_a_theme()
	{
		$this->expectException(AuthorizationException::class);

        $this
        	->be($this->user, 'api')
        	->json('POST', '/api/themes');
	}

	/**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function an_uploaded_theme_must_have_its_required_files()
	{
		$this->actingAs($this->owner, 'api');

		list($themePath, $themeName) = $this->generateTheme('Hello', false);

		$response = $this->json(
		    'POST',
		    '/api/themes/verify',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, true, true)
		    ]
		)
		->assertStatus(422)
		->assertJsonValidationErrors(['file-upload' => 'A theme requires the following files: theme.json, preview.png.']);
	}

	/**
     * @test
     * @group fusioncms
     * @group themes
     */
	public function an_uploaded_theme_cannot_have_the_same_name_as_an_existing_theme()
	{
		$this->actingAs($this->owner, 'api');

		list($themePath, $themeName) = $this->generateTheme('Hello');

		$response = $this->json(
		    'POST',
		    '/api/themes/verify',
		    [
		    	'file-upload' => new UploadedFile($themePath, $themeName, null, null, true, true)
		    ]
		)
		->assertStatus(422)
		->assertJsonValidationErrors(['file-upload' => 'A Theme with matching name already exists.']);
	}

	/**
	 * Generate fake theme zip for testing..
	 * [helper]
	 *
	 * @param  string $themeName
	 * @return string
	 */
	private function generateTheme($themeName = null, $includesRequirements = true)
	{
		$zipArchive = new ZipArchive;
		$themeName  = $themeName ?? $this->faker->word;
		$themePath  = Storage::disk('themes')->path($themeName . '.zip');

		$settings = [
			'name'        => $themeName,
			'namespace'   => Str::studly($themeName),
			'description' => $this->faker->text,
			'author'      => $this->faker->name,
			'version'     => '1.0.0',
		];

		if ($zipArchive->open($themePath, ZipArchive::CREATE) === TRUE) {
			$zipArchive->addEmptyDir($themeName);
			$zipArchive->addFromString($themeName . '/random.txt', Str::random());

			if ($includesRequirements) {
				$zipArchive->addFromString($themeName . '/preview.png', UploadedFile::fake()->image('preview.png'));
				$zipArchive->addFromString($themeName . '/theme.json', collect($settings)->toJson());
			}

			$zipArchive->close();
		}

		return [$themePath, $themeName];
	}
}